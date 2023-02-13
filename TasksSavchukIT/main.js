{
    const fArr = () => {
        if (coursesAndDurationArray.length > 100) {
            console.log('Вітаю');
        } else {
            console.log('Працюй ще')
        }
    }
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    fArr(coursesAndDurationArray);
}

{
    const arrNum = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log(arrNum);
    const arrNumSquare = (arr)=>{
        for (let i=0; i<arr.length; i++) {
            arr[i]*=arr[i];
        }
    }
    arrNumSquare(arrNum);
    console.log(arrNum);

}

{
    const people = [
    {
        name: 'Ross',
        sex: 'male'
    },
    {
        name: 'Monica',
        sex: 'female'
    },
    {
        name: 'Chendler',
        sex: 'male'
    },
    {
        name: 'Phoebe',
        sex: 'female'
    }
]

    const foo = (arr)=>{
        for (const arrElement of arr) {
            if (arrElement['sex'] == 'male'){
                arrElement['name'] = 'X '+arrElement['name'];
            } else {
                arrElement.name += 'Y'
            }
        }
    }
    console.log(foo(people));
    console.log(people);
}









































