import React from 'react';
import CountUp from 'react-countup';

const Overview = () => {
  return (
    <div className="my-6 bg-base-300 rounded-2xl shadow py-10">
      <div className="text-center my-12">
        <div className="flex items-center justify-center gap-4">
          <h2
            className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 heading"
            data-aos="fade-up"
          >
            Overview
          </h2>
        </div>
        <p className="mt-4 text-blue-300 bodyFont" data-aos="fade-up">
          A quick snapshot of our bookstore’s activity and growth
        </p>
      </div>
      <div
        className="shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        data-aos="fade-up"
      >
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-lg">Total Likes</div>
          <div className="stat-value text-primary flex items-center justify-start gap-1">
            {/* 25.6 */}
            <CountUp
              start={0}
              end={25.6}
              decimals={1}
              duration={2.75}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            K
          </div>
          <div className="stat-desc text-lg">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-lg">Page Views</div>
          <div className="stat-value text-primary flex items-center justify-start gap-1">
            {" "}
            <CountUp
              start={0}
              end={2.2}
              decimals={1}
              duration={2.75}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            M
          </div>
          <div className="stat-desc text-lg">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value text-primary flex items-center justify-start gap-1">
            <CountUp
              start={0}
              end={86}
              duration={2.75}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            %
          </div>
          <div className="stat-title text-lg">Tasks done</div>
          <div className="stat-desc text-secondary text-lg">
            31 tasks remaining
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;