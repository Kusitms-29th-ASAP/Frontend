"use client";

import Topbar from "@/components/common/Topbar";
import Filter from "@/components/notification/Filter";
import NotiCard from "@/components/notification/NotiCard";
import { notiCardData, notiCategoryData } from "@/data/notifyData";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Notification = () => {
  const [selected, setSelected] = useState("all");

  const handleFilterChange = (id: string) => {
    setSelected(id);
  };

  const filteredNotiCardData =
    selected === "all"
      ? notiCardData
      : notiCardData.filter((data) => data.id === selected);

  return (
    <div>
      <Top>
        <Topbar text="알림" icon={true} link="/home" />
        <StyledFilterBox>
          {notiCategoryData.map((data, index) => (
            <Filter
              key={index}
              id={data.id}
              category={data.category}
              selected={selected}
              onChange={handleFilterChange}
            />
          ))}
        </StyledFilterBox>
      </Top>
      <Background>
        {filteredNotiCardData.length > 0 ? (
          filteredNotiCardData.map((data, index) => (
            <NotiCard
              key={index}
              category={data.category}
              id={data.id}
              date={data.date}
              text={data.text}
            />
          ))
        ) : (
          <NoData>
            알림 내역이 없어요!
            <Image
              src="/assets/images/no_data.svg"
              width={174}
              height={174}
              alt="결과없음"
            />
          </NoData>
        )}
      </Background>
    </div>
  );
};

export default Notification;

const Top = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16.5px;
`;

const StyledFilterBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 20px;
  background: ${theme.colors.b80};
`;

const NoData = styled.div`
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body1_r};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
