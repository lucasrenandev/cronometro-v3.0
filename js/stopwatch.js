// SELECIONANDO OS ELEMENTOS HTML E ATRIBUINDO EM SUAS VARIÁVEIS
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const millisecondsElement = document.getElementById("milliseconds")
const buttonsContainer = document.querySelectorAll(".buttons-container button")
const dayWeekElement = document.getElementById("dayWeek")
const dayMonthElement = document.getElementById("dayMonth")
const monthElement = document.getElementById("month")
const yearElement = document.getElementById("year")
const dayFormatElement = document.getElementById("dayFormat")
const monthFormatElement = document.getElementById("monthFormat")
const yearFormatElement = document.getElementById("yearFormat")

// VARIÁVEIS PARA O CONTADOR
let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let interval = null

// CRIANDO ARRAY COM OS DIAS DA SEMANA
const daysWeekArray = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

// CRIANDO ARRAY COM OS MÊSES DO ANO
const fullYearArray = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] 

// ADICIONANDO EVENTO PARA TODOS OS BOTÕES
buttonsContainer.forEach(button =>  {
    button.addEventListener("click", function(event) {
        const btnId = event.target.id
        
        if(btnId === "start") {
            pauseCounter()
            startCounter()
        }
        else if(btnId === "pause") {
            pauseCounter()
        }
        else {
            stopCounter()
        }

    })
})

// OBTENDO DATA ATUAL DO SISTEMA
function getDate() {
    const today = new Date()
    const dayWeek = today.getDay()
    const dayMonth = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    dayWeekElement.textContent = `${daysWeekArray[dayWeek]},`
    dayMonthElement.textContent = `${dayMonth} de`
    monthElement.textContent = `${fullYearArray[month]} de`
    yearElement.textContent = year

    dayFormatElement.textContent = `${addValueToCounter(dayMonth)} /`
    monthFormatElement.textContent = `${addValueToCounter(month + 1)} /`
    yearFormatElement.textContent = year
}
// CHAMANDO A FUNÇÃO OBTER DATA
getDate()

// INICIAR CONTADOR
function startCounter() {
    interval = setInterval(counter, 10)
}

// PAUSAR CONTADOR
function pauseCounter() {
    clearInterval(interval)
}

// PARAR CONTADOR
function stopCounter() {
    clearInterval(interval)
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0
    hoursElement.textContent = "00"
    minutesElement.textContent = "00"
    secondsElement.textContent = "00"
    millisecondsElement.textContent = "000"
} 

// ADICIONANDO VALOR
function addValueToCounter(value) {
    return (value < 10 ? "0" + value : value)
}

// ADICIONANDO VALOR
function addValueToMilliseconds(value) {
    return (value < 100 ? "0" + value : value)
}

// CONTADOR
function counter() {
    if((milliseconds += 10) === 1000) {
        seconds ++
        milliseconds = 10
    }
    if(seconds === 60) {
        minutes ++
        seconds = 0
    }
    if(minutes === 60) {
        hours ++
        minutes = 0
    }
    hoursElement.textContent = addValueToCounter(hours)
    minutesElement.textContent = addValueToCounter(minutes)
    secondsElement.textContent = addValueToCounter(seconds)
    millisecondsElement.textContent = addValueToMilliseconds(milliseconds)
}