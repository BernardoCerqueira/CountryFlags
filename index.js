function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.png
    flag.alt = countryName

    card.append(name, flag)
    document.querySelector('#countries').append(card)
}

async function getCountries(){
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countries = await response.json()
    const countriesOrdered = countries.sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()))

    countriesOrdered.forEach(createCountryCard)
}

getCountries()