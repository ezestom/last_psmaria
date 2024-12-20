import React from 'react';
import Image from "next/image";
import './company-logo.css'
import { Subtitle } from "./ui/subtitle";
import argensil from "/public/companies/argensil.png";
import aurill from "/public/companies/aurill.png";
import copack from "/public/companies/copack.png";
import eje from "/public/companies/eje.png";
import fadepsa from "/public/companies/fadepsa.png";
import feit from "/public/companies/feit.png";
import huagro from "/public/companies/huagro.png";
import johnson from "/public/companies/johnson.png";
import lago from "/public/companies/lago.png";
import quali from "/public/companies/quali.png";
import reopen from "/public/companies/reopen.png";
import simo from "/public/companies/simo.png";
import tnt from "/public/companies/tnt.png";

const CompanyLogoSection = () => {
  const companies = [
    {
      name: "argensil",
      logo: argensil,
      url: '#'
    },
    {
      name: "aurill",
      logo: aurill,
      url: '#'
    },
    {
      name: "copack",
      logo: copack,
      url: '#'
    },
    {
      name: "eje",
      logo: eje,
      url: '#'
    },
    {
      name: "fadepsa",
      logo: fadepsa,
      url: '#'
    },
    {
      name: "feit",
      logo: feit,
      url: '#'
    },
    {
      name: "huagro",
      logo: huagro,
      url: '#'
    },
    {
      name: "johnson",
      logo: johnson,
      url: '#'
    },
    {
      name: "lago",
      logo: lago,
      url: '#'
    },
    {
      name: "quali",
      logo: quali,
      url: '#'
    },
    {
      name: "reopen",
      logo: reopen,
      url: '#'
    },
    {
      name: "simo",
      logo: simo,
      url: '#'
    },
    {
      name: "tnt",
      logo: tnt,
      url: '#'
    },

  ];

  return (
    <section className="w-full relative flex justify-center ">
      <div
        className="-z-10 mt-20 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rebeccapurple_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]">
      </div>
      <div className="container px-4 md:px-6">
        <Subtitle subtitle="Empresas" paragraph="Que confían en nosotros" />

        <article className="flex flex-col overflow-hidden mt-2" id='brands-container'>
          <div className="flex flex-row gap-2 p-2"
            id='brands-row'>
            <div className="flex flex-row gap-12">
              {companies.map((company, i) => (
                <a
                  href={company.url}
                  key={i}
                  target="_blank"
                  className="size-24 md:size-48">
                  <div className="p-2 flex grayscale transition duration-200 hover:grayscale-0 hover:scale-105 ">
                    <Image
                      alt={`${company.name} logo`}
                      className="overflow-hidden object-contain object-center drop-shadow-sm max-w-36   max-h-24"
                      src={company.logo}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </article>
      </div>
    </section >
  );
};

export default CompanyLogoSection;
