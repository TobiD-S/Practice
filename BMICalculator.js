function bmi(weight, height)
{
  let bmiT = weight/(Math.pow(height, 2));
  if(bmiT <= 18.5)
  {
    return "Underweight";
    }
    else if(bmiT <= 25.0)
    {
      return "Normal";
      }
      else if(bmiT <= 30.0)
      {
        return "Overweight";
        }
        else if (bmiT > 30.0)
        {
          return "Obese";
          }
          else {
            return "Please check your input"
          }
}



console.log(bmi(66,165));