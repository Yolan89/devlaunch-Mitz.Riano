
const prompt = require('prompt-sync')()

const calculateSalary = (hourlyRate, startTime, endTime) => {
  const [startHour] = startTime.split(':')
  const [endHour] = endTime.split(':')

  const workedHours = endHour - startHour

  let salary = 0

  if (workedHours <= 8) {
    salary = hourlyRate * workedHours
  } else {
    const extraHours = workedHours - 8
    salary = (hourlyRate * 8) + ((extraHours * hourlyRate) * 1.5)
   
  }
  return salary


}

const main = () => {
  const hourlyRate = parseFloat(prompt('Hourly rate $: '))
  const startTime = prompt('Star AT: ')
  const endTime = prompt('End AT: ')

  const salary = calculateSalary(hourlyRate, startTime, endTime)

  console.log(`Salary $${salary}`);

}

main()