var soapRequest = require('easy-soap-request');
var convert = require('xml-js');

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?wsdl'
const headers = {
  'Content-Type': 'text/xml;charset=UTF-8',
  //'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode' // Not needed in this case (soapAction = "" in the wsdl).
}
const xml2 = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">' +
            '<soapenv:Header/>' +
            '<soapenv:Body> ' +
            '<web:CountryName>' +
            '<web:sCountryISOCode>PT</web:sCountryISOCode>' +
            '</web:CountryName>' +
            '</soapenv:Body>' +
            '</soapenv:Envelope>'


var json_result = {};

async function some_function() {
  const {response} = await soapRequest(url, headers, xml2);
  //console.log(response.body); // Here the response.body is in XML format , so use the xml2json method from the xml-js module.
  json_result = convert.xml2json(response.body, {compact: true, spaces: 4});
  console.log(json_result);
};

 some_function()                         // Calling the function
