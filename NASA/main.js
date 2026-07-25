const allCards = document.getElementsByClassName('all-cards')[0]
let data;
const apiKey = 'v28BQclKB4WH1gzdpAovU76zUdxUIjB0eBhKI3hT';
//

const getData = ()=>{
  const urls = [`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`, 
 `https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${apiKey}`, 
 ]; 

const promises = urls.map(url => fetch(url));
Promise.all(promises)
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

}

//dark #333333
//gray #888888
//light gray #BBBBBB
//for bg #EEEEEE
