const BASEURL = `http://localhost:3000/api/v1/`;

export const Clients = {
    all(){
        return fetch(`${BASEURL}/clients`, {credentials:'include'}).then(res => res.json)
    }
};