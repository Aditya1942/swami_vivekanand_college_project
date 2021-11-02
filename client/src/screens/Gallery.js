import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import useLoader from '../hooks/useLoader'
function openImage (base64URL) {
  var win = window.open()
  win.document
    .write(`<iframe src=" ${base64URL}" frameborder="0" style="border:0; 
 top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen> 
 </iframe>`)
}
const Gallery = () => {
  const loader = useLoader()
  const [GalleryData, setGalleryData] = useState([])
  useEffect(() => {
    loader.Show()
    const source = axios.CancelToken.source()
    axios({
      url: '/gallery',
      method: 'get',
      dataType: 'json',
      cancelToken: source.token
    }).then(data => {
      if (data?.data) {
        setGalleryData(data.data)
      } else {
        setGalleryData([])
      }
      console.log(data.data)
      loader.Hide()
    })
    return () => {
      source.cancel('hey yo! going too fast. take it easy')
    }
  }, [])
  return (
    <div className='gallery'>
      <Header
        title='Gallery'
        Breadcrumb={['Gallery']}
        BreadcrumbLink={['/gallery']}
      />
      <div className='container'>
        {GalleryData.map(item => (
          <div className='row' key={item._id}>
            <div className='col-md-12'>
              <div className='section-top-border'>
                <h3>{item.title}</h3>
                <div className='row gallery-item'>
                  {item.images.map(image => {
                    // let imgurl =
                    //   process.env.PUBLIC_URL +
                    //   "/img/" +
                    //   item.folderPath +
                    //   "/" +
                    //   image.img;
                    let imgurl =
                      process.env.REACT_APP_IMG_URL + 'img/gallery/' + image.img
                    return (
                      <div className={image.isBig ? 'col-md-6' : 'col-md-4'}>
                        <span className='img-pop-up'>
                          <span
                            // href={imgurl}
                            onClick={() => openImage(imgurl)}
                          >
                            <div
                              className='single-gallery-image'
                              style={{
                                background: `url(${imgurl})`
                              }}
                            />
                          </span>
                        </span>
                        <div className='typography mt-3'>
                          <h5>{image.title}</h5>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
