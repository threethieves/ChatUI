import React from 'react';
import { IDate } from './parser';
import dayjs from "dayjs"

export interface TimeProps {
  date: IDate;
  timeFormat?: string
}


export const Time = ({ date, timeFormat = 'DD-MM-YYYY HH:mm:ss' }: TimeProps) => {
  const isString = typeof date === 'string';
  const dateTime = isString ? date : new Date(date).toLocaleString('zh').replace(/\//g, '-');
  const dateTxt = isString ? date : dayjs(date).format(timeFormat)

  return (
    <time className="Time" dateTime={dateTime}>
      {dateTxt}
    </time>
  );
};
