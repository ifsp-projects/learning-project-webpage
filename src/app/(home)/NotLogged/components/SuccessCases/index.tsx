import React from 'react'

import { Container } from '@/components/toolkit/Container'
// import { SUCCESS_CASES_DATA } from "./data";
// import { SuccessCaseProps } from "./types";
// import { SuccessCaseCard } from "./SuccessCaseCard";

export const SuccessCases: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="home-success-cases"
    >
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* {SUCCESS_CASES_DATA.map((case: SuccessCaseProps, index: number) => (
        <SuccessCaseCard copy={case} key={`${case.title}-${index}`} />
      ))} */}
      </ul>
    </Container>
  )
}
