function buildScore() {
    var total = 0;
    var allId = [
        'select_1_1', 'select_2_2',
        'selectMore_1_1', 'selectMore_1_2', 'selectMore_1_4',
        'selectMore_2_1', 'selectMore_2_2', 'selectMore_2_3',
        'judge_1_1', 'judge_2_2',
    ];

    var fillFirst = document.getElementById('fill_1');
    if (fillFirst.value === '统一建模语言')
        total = total + 5;

    var fillSecond = document.getElementsByName('fill_2');
    for (var i = 0; i < fillSecond.length; i++)
        if (fillSecond[i].value === '封装性' || fillSecond[i].value === '继承性' || fillSecond[i].value === '多态性')
            total = total + 5;

    var shortAnswer = document.getElementById('shortAnswer');
    if (shortAnswer.value === '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。')
        total = total + 5;

    for (var i = 0; i < allId.length; i++) {
        var click = document.getElementById(allId[i]);
        if (click.checked)
            total += 5;
    }
        document.getElementById("result").innerHTML = total;
}

