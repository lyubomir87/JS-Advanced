function calc(name, age, weight, height) {
    const personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    const BMI = Math.round((weight / (height / 100) ** 2));

    let status = '';
    if (BMI < 18.5) {
        status = 'underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
        status = 'normal';
    } else if (BMI >= 25 && BMI < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    const recommendation = status === 'obese' ? 'admission required' : null;

    return recommendation === null
        ? { name, personalInfo, BMI, status }
        : { name, personalInfo, BMI, status, recommendation }
}
