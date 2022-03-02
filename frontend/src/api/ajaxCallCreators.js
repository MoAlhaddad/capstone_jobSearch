import * as config from '../constants/index';

export function get(path) {
    console.log(config.server);
    return new Promise((resolve, reject) => {
        return fetch(
            new  Request(
                `${config.server}${path}`,
                {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    type: 'application/json'
                }
            )
        )
        .then(function(response) {
            debugger;
            switch(response.status) {
                case 200:
                    response.message = "Data retrieved successfully.";
                    resolve(response.json());
                    break;
                case 201:
                    response.message = "Data created successfully.";
                    resolve(response.json());
                    break;
                case 202:
                    response.message = "Batch processed successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 203:
                    response.message = "Backed up successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 204:
                    response.message = 'No content returned, response successful.';
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.text());
                    break;
                case 304:
                    response.message = "Request successful, WARNING: Data not motified.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 305:
                    response.message = "Proxy Error.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 400:
                    response.message = "Bad Request.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 401:
                    response.message = "Unauthorized ";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 404:
                    response.message = "Not found";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 415:
                    response.message = "Something wrong with body of response";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                default:
                    response.message = "Server error."
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
            }
        })
        .catch(function(error) {
            reject(error);
        });
    })
    .then(response => response)
    .catch(function(error) {
        console.log("Get Promise Error:", error);
    })
}

export function post(path, body, type) {
    return new Promise((resolve, reject) => {
        return fetch(
            new Request(
                `${config.server}${path}`,
                {
                    method: "POST",
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        "X-Token": "abcd1234"
                    },
                    bodyUsed: true,
                    body: JSON.stringify(body),
                    type: type ? type : 'application/json'
                }
            )
        )
        .then(function(response) {
            switch(response.status) {
                case 200:
                    response.message = "Data retrieved successfully.";
                    resolve(response.json());
                    break;
                case 201:
                    response.message = "Data created successfully.";
                    resolve(response.json());
                    break;
                case 202:
                    response.message = "Batch processed successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 203:
                    response.message = "Backed up successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 204:
                    response.message = 'No content returned, response successful.';
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.text());
                    break;
                case 304:
                    response.message = "Request successful, WARNING: Data not motified.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 305:
                    response.message = "Proxy Error.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 400:
                    response.message = "Bad Request.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 401:
                    response.message = "Unauthorized ";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 404:
                    response.message = "Not found";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 415:
                    response.message = "Something wrong with body of response";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                default:
                    response.message = "Server error."
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
            }
        })
        .catch(function(error) {
            return reject(error);
        });
    })
    .then(result => result)
    .catch(function(err){
        console.log("Error:", err);
    });
}

export function put(path, body) {
    return new Promise((resolve, reject) => {
        return fetch(
            new  Request(
                `${config.server}${path}`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        "X-Token": "abcd1234"
                    },
                    bodyUsed: true,
                    body: JSON.stringify(body),
                }
            )
        )
        .then(function(response) {
            switch(response.status) {
                case 200:
                    response.message = "Data retrieved successfully.";
                    break;
                case 201:
                    response.message = "Data created successfully.";
                    resolve(response.json());
                    break;
                case 202:
                    response.message = "Batch processed successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 203:
                    response.message = "Backed up successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 204:
                    response.message = 'No content returned, response successful.';
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.text());
                    break;
                case 304:
                    response.message = "Request successful, WARNING: Data not motified.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 305:
                    response.message = "Proxy Error.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 400:
                    response.message = "Bad Request.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 401:
                    response.message = "Unauthorized ";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 404:
                    response.message = "Not found";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 415:
                    response.message = "Something wrong with body of response";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                default:
                    response.message = "Server error."
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
            }
        })
        .catch(function(error) {
            return reject(error);
        });
    })
    .then(result => result)
    .catch(function(err){
        console.log("Error:", err);
    });
}

export function patch(path, body, type) {
    return new Promise((resolve, reject) => {
        return fetch(
            new  Request(
                `${config.server}${path}`,
                {
                    credentials: 'include',
                    method: "PATCH",
                    headers: {
                        // 'Authorization': 'Bearer Token FUCK FUCK FUCK YOU',
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(body),
                    type: type ? type : 'application/json'
                }
            )
        )
        .then(function(response) {
            switch(response.status) {
                case 200:
                    response.message = "Data retrieved successfully.";
                    break;
                case 201:
                    response.message = "Data created successfully.";
                    resolve(response.json());
                    break;
                case 202:
                    response.message = "Batch processed successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 203:
                    response.message = "Backed up successfully.";
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 204:
                    response.message = 'No content returned, response successful.';
                    response.resolved = true;
                    response.isJsonResponse = false;
                    resolve(response.text());
                    break;
                case 304:
                    response.message = "Request successful, WARNING: Data not motified.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    resolve(response.json());
                    break;
                case 305:
                    response.message = "Proxy Error.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 400:
                    response.message = "Bad Request.";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 401:
                    response.message = "Unauthorized ";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 404:
                    response.message = "Not found";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                case 415:
                    response.message = "Something wrong with body of response";
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
                default:
                    response.message = "Server error."
                    response.resolved = false;
                    response.isJsonResponse = false;
                    reject(response.text());
                    break;
            }
        })
        .catch(function(error) {
            return reject(error);
        });
    })
    .then(result => result)
    .catch(function(err){
        console.log("Error:", err);
    });
}

export function deleteCall(path) {
    return new Promise((resolve, reject) => {
        return fetch(
            new  Request(
                `${config.server}${path}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    credentials: 'same-origin',
                    cache: 'reload',
                    bodyUsed: false
                }
            )
        )
            .then(function(response) {
                switch(response.status) {
                    case 200:
                        response.message = "Data retrieved successfully.";
                        break;
                    case 201:
                        response.message = "Data created successfully.";
                        resolve(response.json());
                        break;
                    case 202:
                        response.message = "Batch processed successfully.";
                        response.resolved = true;
                        response.isJsonResponse = false;
                        resolve(response.json());
                        break;
                    case 203:
                        response.message = "Backed up successfully.";
                        response.resolved = true;
                        response.isJsonResponse = false;
                        resolve(response.json());
                        break;
                    case 204:
                        response.message = 'No content returned, response successful.';
                        response.resolved = true;
                        response.isJsonResponse = false;
                        resolve(response.text());
                        break;
                    case 304:
                        response.message = "Request successful, WARNING: Data not motified.";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        resolve(response.json());
                        break;
                    case 305:
                        response.message = "Proxy Error.";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                    case 400:
                        response.message = "Bad Request.";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                    case 401:
                        response.message = "Unauthorized ";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                    case 404:
                        response.message = "Not found";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                    case 415:
                        response.message = "Something wrong with body of response";
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                    default:
                        response.message = "Server error."
                        response.resolved = false;
                        response.isJsonResponse = false;
                        reject(response.text());
                        break;
                }
            })
            .catch(function(error) {
                return reject(error);
            });
    })
    .then(result => result)
    .catch(function(err){
        console.log("Error:", err);
    });
}