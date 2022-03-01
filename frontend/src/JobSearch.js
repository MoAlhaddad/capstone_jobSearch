import { response } from 'express';
import { getCurrencySymbol, extractFormData } from './utils';


class JobApi {
    constructor(
        searchFormSelector,
        resultsContainerSelector,
        loadingElementSelector,
    ) {
        this.searchForm = document.querySelector(searchFormSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
        this.loadingElementSelector = document.querySelector(loadingElementSelector);

    }

    setCountryCode() {
        this.countryCode = 'gb';
        this.setCurrencyCode();

        fetch('http://ip-api.com/json')
            .then(results => results.json())
            .then(results => {
                 this.CountryCode = results.countryCode.toLowerCase();
                 this.setCurrencySymbol();
            });
    }

    setCurrencyCode() {
        this.currencySymbol = getCurrencySymbol(this.countryCode);
    }

    configureFormListener() {

        this.searchForm.addEventListener('submit', (event) => {
            event.prevenetDefault();
            this.resultsContainer.innerHTML = '';
            const { search, location } = extractFormData(this.searchForm);

            fetch(`http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`)
                .then(response => response.json())
                .then(({ results }) => {
                    return results
                        .map(job => jobTemplate(job, this.currencySymbol))
                        .join('');
                })
        })
    }




}