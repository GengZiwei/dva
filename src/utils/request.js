import NProgress from 'nprogress'
import sweetalert from 'sweetalert'
import fetch from 'dva/fetch';

function parseJSON(response) {
  NProgress.done()
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  NProgress.start();
  return await fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => {
        sweetalert({
          title: err,
          type: 'error',
          showConfirmButton: true
        })
    })
}
