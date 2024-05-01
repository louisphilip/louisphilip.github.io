"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { filterButtons, portfolioData } from "@/data/portfolioData";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function PortfolioThree() {
  const [filteredItem, setFilteredItem] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);
  const [starredItems, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getGithubStars() {
      const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN}`,
          }
        }
      });

      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

      try {
        const { data } = await client.query({
          query: gql`
          {
            user(login: "louisphilip") {
              starredRepositories {
                edges {
                  node {
                    ... on Repository {
                      name
                      id
                      url
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
          `
        });

        const { user } = data;
        const starredItems = user.starredRepositories.edges.map(edge => edge.node);
        console.log(starredItems);
        setItems(starredItems);
      } catch (error) {
        setError(error);
      }

    }
    getGithubStars();

    if (activeTab == "All") {
      setFilteredItem(portfolioData);
    } else {
      const filtered = portfolioData.filter((elm) =>
        elm.category.includes(activeTab)
      );
      setFilteredItem(filtered);
    }
  }, [activeTab]);
  return (
    <>
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">Portfolio</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="row">
            {/* <div className="col-12">
              <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper mb-30">
                {filterButtons.map((elm, i) => (
                  <li
                    onClick={() => setActiveTab(elm.text)}
                    key={i}
                    className={`fillter-btn ${activeTab == elm.text ? "is-checked" : ""
                      } `}
                  >
                    {elm.text}
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="col-12">
              <div id="fillter-item-active" className="fillter-item-wrap ">
                <AnimatePresence>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      850: 2,
                      1100: 3,
                      1200: 2,
                    }}
                  >
                    <Masonry>
                      {starredItems.map((elm, i) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.3 }}
                          key={elm.id}
                          className={elm.class}
                          style={{ width: "100%" }}
                        >
                          <div
                            style={{ width: "100%" }}
                            className={`fillter-item bg-prink`}
                          >
                            <a
                              className="img cursor-pointer"
                              data-bs-toggle="modal"
                            >
                            </a>
                            <span className="item-subtitle">
                              ⭐️ {elm.stargazers.totalCount}
                            </span>
                            <h6
                              className="item-title"
                              onClick={() => {
                                setModalContent(elm);
                                setShowModal(true);
                              }}
                            >
                              <a href={elm.url} target="_blank" className="cursor-pointer">{elm.name}</a>
                            </h6>
                          </div>
                        </motion.div>
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} All Rights Reserved by LP Shahim.
          </span>
        </div>
      </div>
    </>
  );
}