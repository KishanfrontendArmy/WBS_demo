import React from "react";
import "./BadgeList.css";
import Badge from "../Badge/index";
import { Badges } from "../../data";

function BadgeList() {
  return (
    <>
      <div className="media_coverage_list_sec">
        {Badges && Badges.length > 0 && Badges.map((data, index) => {
          return (
            <Badge key={index} count={data.count} total={data.total} Description={data.description} delaybadge={data.delaybadge} />
          )
        })}
      </div>
    </>
  );
}

export default BadgeList;
