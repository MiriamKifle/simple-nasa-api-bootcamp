//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
document.querySelector('button').addEventListener('click', getImage)

  function getImage(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=cuofQQcxvpiderCB8QQL48ZcITAy9vvhz4edsmPD&date=${date}`

    fetch(url)

      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.code==400) {
        alert('Date must be between Jun 16, 1995 and Sep 28, 2021')
        }else{
          document.querySelector('img').src = data.url
          document.querySelector('h3').innerText = data.explanation
          document.querySelector('h2').innerText = data.title
          console.log(data)
        }
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }



  
