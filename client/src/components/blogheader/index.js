import React from "react";
import Style from "./Blogheader.module.css";
import moment from "moment";
import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Blogheader = ({ image, title, description, createdAt }) => {
  const { loading } = useSelector(state => state.articleReducer)
  const renderImg = (image) => {
    if (loading) {
      return <Skeleton width={70} height={70} />;
    } else {
      return <img src={image} alt="logo" />;
    }
  };

  return (
    <SkeletonTheme>
      <div className={Style.headerContainer}>
        <div className={Style.imgContainer}>{renderImg(image)}</div>
        <div className={Style.titleContainer}>
          <h3 className={Style.title}>{title || <Skeleton />}</h3>
          <p className={Style.subtitle}>
            {description || <Skeleton />} -{" "}
            <span>
              {moment(createdAt).format("YYYY/MM/DD")}
            </span>
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Blogheader;
