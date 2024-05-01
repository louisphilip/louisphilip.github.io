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

export default function PortfolioThree({ starredItems }) {
  const [filteredItem, setFilteredItem] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    async function getGithubStars() {
      const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
          }
        }
      });
    
      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });
    
    
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
    
      return {
        props: {
          starredItems
        }
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
            <div className="col-12">
              <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper mb-30">

              </ul>
            </div>
            <div>
              {starredItems ? (
                <ul>
                  {starredItems.map(item => (
                    <li key={item.name}>
                      <a href={item.url}>{item.name}</a>
                      {item.description && <p>{item.description}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading starred repositories...</p>
              )}
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