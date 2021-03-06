import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
// import { SyllabusCoursesList } from '../../Database'
import useLoader from '../../hooks/useLoader'

const SyllabusComponent = ({ title, img, subCourse }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/courses/${img}`
  return (
    <div className='properties pb-20'>
      <div className='properties__card'>
        <div className='properties__img overlay1'>
          <b>
            <img height={220} src={imgUrl} alt='' />
          </b>
        </div>
        <div className='properties__caption'>
          <p>{title}</p>
          {subCourse.map((item, index) => (
            <span key={index}>
              <h3 className='mt-2'>{item.title}</h3>
              {item?.pdfs?.map((pdf, i) => {
                let titlePdf =
                  i === 0 ? 'Sem 1-2' : i === 1 ? 'Sem 3-4' : 'Sem 5-6'
                return (
                  <a
                    key={i}
                    href={pdf}
                    download
                    target='_blank'
                    rel='noreferrer'
                    className='genric-btn info-border circle  pr-2 pl-2 mr-3'
                  >
                    {titlePdf}
                  </a>
                )
              })}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
const Syllabus = () => {
  const loader = useLoader()
  const [SyllabusCoursesList, setSyllabusCoursesList] = useState([])
  console.log(SyllabusCoursesList)

  useEffect(() => {
    loader.Show()
    const source = axios.CancelToken.source()
    axios({
      url: '/syllabus',
      method: 'get',
      dataType: 'json',
      cancelToken: source.token
    }).then(data => {
      if (data?.data) {
        setSyllabusCoursesList(data.data)
      } else {
        setSyllabusCoursesList([])
      }
      console.log(data)
      loader.Hide()
    })
    return () => {
      source.cancel('hey yo! going too fast. take it easy')
    }
  }, [])
  return (
    <div>
      <Header
        title='Syllabus'
        Breadcrumb={['Syllabus']}
        BreadcrumbLink={['/syllabus']}
      />
      <div className='courses-area section-padding40 fix'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-8'>
              <div className='section-tittle text-center mb-55'>
                <h2>Syllabus</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {SyllabusCoursesList.map((course, index) => (
              <div className='col-lg-4' key={index}>
                <SyllabusComponent
                  key={course.id}
                  title={course.title}
                  img={course.img}
                  subCourse={course.subCourse || []}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Syllabus
