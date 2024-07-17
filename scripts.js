async function fetchAPIData(url, resultElementId) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById(resultElementId).innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById(resultElementId).innerHTML = 'Error fetching data: ' + error;
    }
}

function submitPostalCodeLookup() {
    const country = document.getElementById('country').value;
    const postalcode = document.getElementById('postalcode').value;
    const url = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${postalcode}&country=${country}&username=Sohail654`;
    fetchAPIData(url, 'postalCodeResult');
}

function submitTimezone() {
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;
    const url = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=Sohail654`;
    fetchAPIData(url, 'timezoneResult');
}

function submitCountryInfo() {
    const country_code = document.getElementById('country_code').value;
    const url = `http://api.geonames.org/countryInfoJSON?country=${country_code}&username=Sohail654`;
    fetchAPIData(url, 'countryInfoResult');
}
