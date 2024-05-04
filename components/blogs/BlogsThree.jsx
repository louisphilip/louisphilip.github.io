"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "@/data/blogs";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function BlogsThree({ posts }) {
  const [outputArray, setfirst] = useState(chunkArray(blogData, 4));
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@louisphilip_s');
        const data = await res.json();
        const items = data.items;
        setItems(items);
      } catch {
        setError(true);
      }
    }
    fetchData();
    setShowSlider(true);
  }, []);

  if (error) {
    return (
      <section>
        <div>
          <ul>
            <p>Failed to fetch data, please try again later.</p>
          </ul>
          <a
            href={"https://medium.com/@louisphilip_s"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Read on Medium
          </a>
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">LP's blogs</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="blog-slider-wrap">
            <div className="swiper-container blog-slider-active">
              {showSlider && (
                <Swiper
                  // {...setting}
                  modules={[Navigation, Pagination]}
                  pagination={{
                    el: ".blog-progation-three",
                    clickable: true,
                  }}
                  // loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                >
                  {items.map((item, index) => (
                    // <SwiperSlide key={index}>
                    //   <div className="swiper-slide">
                        // <div className="row">
                          // <div className="col-lg-6 col-md-6">
                            <div
                              className={`blog-slider-single bg-prink `}
                            >
                              <a className="img cursor-pointer">
                                <img style={{
                                  width: "100%",
                                  height: "fit-content",
                                }} width={430} height={430} src={(item['description']).toString().match(/<img[^>]+src="([^">]+)"/)[1]} alt={item.title}></img>
                              </a>
                              <div className="blog-meta">
                                <span className="blog-date">{new Date(item.pubDate).toDateString()}</span>
                              </div>
                              <h6
                                className="blog-title"
                              >
                                <a href={item.link} target={"_blank"} className="cursor-pointer">{item.title}</a>
                              </h6>
                                <span className="blog-cetagory">
                                    <i><b>{item.categories.join(", ")}</b></i>
                                </span>
                            </div>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="blog-progation blog-progation-three"></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} All Rights Reserved by LP Shahim.
          </span>
        </div>
      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        modalContent={modalContent}
      />
    </>
  );
}