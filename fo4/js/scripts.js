const totalPoints = 28;

const attributeShorthands = {
    "Strength": "STR",
    "Perception": "PER",
    "Endurance": "END",
    "Intelligence": "INT",
    "Charisma": "CHA",
    "Agility": "AGI",
    "Luck": "LCK"
};

const toShorthand = function (fullAttributeName) {
    const shorthand = attributeShorthands[fullAttributeName] || fullAttributeName;
    const firstLetter = shorthand.charAt(0).toUpperCase();
    const digit = shorthand.slice(1);
    return '<b>' + firstLetter + '</b>' + '<b>' + digit + '</b>';
};

const renderPerks = function () {
    let html = '';
    const special = getSPECIAL();
    const validAttributes = ["Strength", "Perception", "Endurance", "Charisma", "Intelligence", "Agility", "Luck"];

    html += '<tr>';

    for (let i = 0; i < special.length; ++i) {
        const attribute = special[i].special;
        if (validAttributes.includes(attribute)) {
            html += '<th>' + toShorthand(attribute) + ': ' + special[i].value + '</th>';
        }
    }

    html += '</tr>';

    for (let i = 0; i <= 9; ++i) {
        html += '<tr>';

        for (let j = 0; j < perks.length; ++j) {
            const perk = perks[j].perks[i];
            let className = i > special[j].value - 1 ? ' unavailable' : '';

            if (!perk.currentRank) {
                perk.currentRank = 0;
            }

            const title = perk.ranked.map(function (rank) {
                const rankClass = perk.currentRank >= rank.rank ? 'has-rank' : 'no-rank';
                let description = 'Rank ' + rank.rank + ' (' + rank.level + '):';
                
                if (rank.str) {
                    description += ' (' + toShorthand("Strength") + ' ' + rank.str + ')';
                } else if (rank.per) {
                    description += ' (' + toShorthand("Perception") + ' ' + rank.per + ')';
                } else if (rank.end) {
                    description += ' (' + toShorthand("Endurance") + ' ' + rank.end + ')';
                } else if (rank.cha) {
                    description += ' (' + toShorthand("Charisma") + ' ' + rank.cha + ')';
                } else if (rank.int) {
                    description += ' (' + toShorthand("Intelligence") + ' ' + rank.int + ')';
                } else if (rank.agi) {
                    description += ' (' + toShorthand("Agility") + ' ' + rank.agi + ')';
                } else if (rank.lck) {
                    description += ' (' + toShorthand("Luck") + ' ' + rank.lck + ')';
                }

                description += ' - ' + rank.description;
                
                return '<p class=' + rankClass + '>' + description + '</p>';
            }).join('');

            html += '<td><div data-placement="left" data-trigger="hover" data-original-title="' + perk.name + '" rel="popover" data-html="true" data-content="' + title + '" data-i="' + i + '" data-j="' + j + '" class="perk' + className + '" style="background-image:url(\'img/' + perk.img + '\');">';

            if (className !== ' unavailable') {
                html += '<div class="overlay"><button class="btn btn-xs btn-danger btn-dec-perk"><i class="glyphicon glyphicon-minus"></i></button>&nbsp;' + perk.currentRank + '/' + perk.ranks + '&nbsp;<button class="btn btn-xs btn-success btn-inc-perk"><i class="glyphicon glyphicon-plus"></i></button></div>';
            }

            html += '</td>';
        }
        html += '</tr>';
    }

    $('.table').html(html);
    $('[rel="popover"]').popover();
};

const getJSON = function () {
    return btoa(JSON.stringify({
        s: getSPECIALShort(),
        r: getRanks()
    }));
};

const getRanks = function () {
    const ranks = [];
    
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            const perk = perks[i].perks[j];
            if (perk.currentRank && perk.currentRank > 0) {
                const item = {};
                item[perk.name] = perk.currentRank;
                ranks.push(item);
            }
        }
    }

    return ranks;
};

const getSPECIALShort = function () {
    const specs = [];

    $('input[type="number"]').each(function () {
        specs.push($(this).val());
    });

    return specs;
};

const getSPECIAL = function () {
    return $('[data-special]').map(function () {
        return {
            special: $(this).data('special'),
            value: $(this).find('input').val()
        };
    });
};

const requiredLevel = function () {
    let total = 0;
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            total += perks[i].perks[j].currentRank;
        }
    }

    let remaining = totalPoints - getAllocatedPoints();

    if (includeBobbleheads()) {
        remaining += 8;
    }

    if (remaining <= 0) {
        total += 1 + remaining * -1;
    }

    let maxLevel = 0;
    
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            for (let k = 0; k < perks[i].perks[j].currentRank; ++k) {
                if (perks[i].perks[j].ranked[k].level > maxLevel) {
                    maxLevel = perks[i].perks[j].ranked[k].level;
                }
            }
        }
    }

    if (maxLevel > total) {
        total = maxLevel;
    }

    return total;
};

const renderRequiredLevel = function () {
    $('.required-level').text(requiredLevel());
};

const renderAll = function () {
    renderPerks();
    calculatePoints();
    renderRequiredLevel();
    renderSummary();
    window.location.hash = '#' + getJSON();
};

const calculatePoints = function () {
    let remaining;
    
    if (infinitePoints()) {
        remaining = 999; // Set remaining points to 999
    } else {
        let basePoints = includeBobbleheads() ? 22 : 21;
        remaining = basePoints - getAllocatedPoints();
        
        if (remaining < 0) {
            remaining = 0;
        }
    }
    
    $('.points-left').text(remaining);
};

const getAllocatedPoints = function () {
    return $('[data-special] input').map(function () {
        return parseInt($(this).val());
    }).get().reduce(function (prev, curr) {
        return prev + curr;
    });
};

const updateSpecialInputs = function() {
    const { min, max } = getSPECIALMinMax();
    $(".list-special>li>span>input").attr({ "min": min, "max": max });
};

const getSPECIALMinMax = function() {
    let min = 1;
    let max = 12;

    return { min, max };
};

$(function () {
    const hash = window.location.hash.replace('#', '');
    
    if (hash.length > 0) {
        const load = JSON.parse(atob(hash));
        
        $('input[type=number]').each(function (index) {
            $(this).val(load.s[index]);
        });

        for (let i = 0; i < load.r.length; ++i) {
            const key = Object.keys(load.r[i])[0], value = load.r[i][key];

            for (let j = 0; j < perks.length; ++j) {
                for (let k = 0; k < perks[j].perks.length; ++k) {
                    let perk = perks[j].perks[k];
                    
                    if (perk.name === key) {
                        perk.currentRank = value;
                    }
                }
            }
        }
    }

    renderAll();

    const $includeBobbleheads = $('.include-bobbleheads');
    const $infinitePoints = $('.infinite-Points');

    // Add event handlers for includeBobbleheads and infinitePoints checkboxes
    $includeBobbleheads.on('click', function () {
        updateSpecialInputs(); // Update special inputs min/max attributes
        calculatePoints(); // Recalculate points
        renderRequiredLevel(); // Render required level
        renderSummary(); // Render summary
    });

    $infinitePoints.on('click', function () {
        updateSpecialInputs(); // Update special inputs min/max attributes
        calculatePoints(); // Recalculate points
        renderRequiredLevel(); // Render required level
        renderSummary(); // Render summary
    });

    $('.btn-inc').on('click', function () {
        const remainingPoints = pointsRemaining();
        const { max } = getSPECIALMinMax();
        const $li = $(this).parent().parent();
        const $input = $li.find('input');
        const value = parseInt($input.val());

        if (remainingPoints > 0 && value < max) {
            $input.val(value + 1);
        }

        renderAll();
    });

    $('.btn-dec').on('click', function () {
        const {min} = getSPECIALMinMax()
        const $li = $(this).parent().parent(),
              $input = $li.find('input'),
              value = parseInt($input.val()),
              special = $li.data('special');

        if (value > min) {
            $input.val(value - 1);

            for (let i = 0; i < perks.length; ++i) {
                if (perks[i].special === special) {
                    for (let j = value - 1; j < perks[i].perks.length; ++j) {
                        perks[i].perks[j].currentRank = 0;
                    }
                }
            }
        }

        renderAll();
    });

    $('body').on('click', '.btn-inc-perk, .btn-dec-perk', function () {
        const $container = $(this).parent().parent(),
              i = parseInt($container.data('i')),
              j = parseInt($container.data('j')),
              perk = perks[j].perks[i],
              incrementing = $(this).hasClass('btn-inc-perk');

        if (!perk.currentRank) {
            perk.currentRank = 0;
        }

        if (incrementing) {
            if (perk.currentRank < perk.ranks) {
                perk.currentRank += 1;
            }
        } else {
            if (perk.currentRank > 0) {
                perk.currentRank -= 1;
            }
        }

        renderAll();
    });
});
