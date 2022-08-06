import useAsync from "./useAsync";

const DEFAULT_OPTIONS = {
    headers : {
        "Content-Type": "application/json"
    }
}

export default function useFetch(url, options={}, dependecies) {
  return useAsync(() => {
    return fetch(url, {...DEFAULT_OPTIONS, ...options})
           .then(response => {
                if (response.ok) return response.json()
                return response.json().then(json => Promise.reject(json))
           })
  }, dependecies)
}
