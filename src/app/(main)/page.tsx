import { CoursesCarousel } from "@/components/courses-carousel";
import { ImageSlider } from "@/components/image-slider";
import { NewsCard } from "@/components/news-card";
import { ProgramsCarousel } from "@/components/programs-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <section className="max-w-[1090px] m-auto my-40 px-4 grid grid-cols-1 md:grid-cols-7 gap-10 ">
        <div className="md:col-span-4 w-full text-justify space-y-6">
          <div className="bg-green-500/20 w-max p-2 px-4 rounded-md text-xs sm:text-sm text-green-600 font-semibold">
            <p>GEU - Human Resource Development Centre</p>
          </div>
          <div className="text-2xl sm:text-4xl font-semibold pb-4">
            <h2>We Are Pioneers In The World!</h2>
          </div>
          <div className="text-green-700 text-sm sm:text-base font-medium">
            <p>
              Education is the single most important instrument for social and
              economic transformation. As of now, we have more than 950
              universities and 42,000 colleges, with total student enrolment of
              nearly 31 million. The Gross Enrollment Ratio (GER) has doubled
              during the last 10 years to reach the level of 25.2%, as projected
              GER of 30% for 2020 by the Govt. of India.
            </p>
          </div>
          <div className="text-muted-foreground text-sm sm:text-base">
            <p>
              The traditional learning methodologies have failed to get the most
              out of what learners could do after undergoing the learning
              process whereas an Outcome Based Education (OBE) system in higher
              education is the best way for learner to achieve their goals. The
              traditional model of higher education is evolving due to some of
              the factors that threaten the status quo such as increasing
              international competition, a spurt in private funded institutions,
              changing demographics, an increasingly mobile population, new-tech
              savvy students that expect anytime, anywhere customized learning,
              and the emergence of new commercial providers.
            </p>
          </div>
          <div className="pt-4">
            <Link href="#">
              <Button variant="custom" size="custom">
                Read More <ArrowRight className="size-5 ml-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:col-span-3 self-start place-content-center relative flex items-center gap-2 md:gap-4">
          <div className="w-[55%] h-[340px] md:h-[480px] bg-[url('/about_1.jpg')] bg-center bg-cover shadow shadow-slate-500" />
          <div className="w-[45%]">
            <div className="w-full h-[160px] md:h-[240px] mb-2 md:mb-4 bg-[url('/about_2.jpg')] bg-center bg-cover shadow shadow-slate-500" />
            <div className="w-[70%] h-[110px] md:h-[160px] bg-[url('/about_3.jpg')] bg-center bg-cover shadow shadow-slate-500" />
          </div>
        </div>
      </section>
      <section className="bg-[#323232] py-24 text-center">
        <p className="text-green-600 font-semibold mb-4">Programs</p>
        <h2 className="text-2xl md:text-4xl text-white font-semibold leading-snug max-w-[900px] w-full px-4 m-auto">
          The Aim Of HRDCs Is To Adopt Tranformative & Inovatice Approaches In
          Higher Education
        </h2>
        <ProgramsCarousel />
        <div className="m-auto w-max flex flex-col sm:flex-row gap-8 items-center mt-6">
          <Link href="#">
            <Button size="custom" variant="customSecondary">
              Explore Courses
            </Button>
          </Link>
          <Link href="#">
            <Button
              size="custom"
              variant="customOutline"
              className="w-40 justify-start py-[22px]"
            >
              Register
            </Button>
          </Link>
        </div>
      </section>
      <section className="py-24 text-center">
        <p className="text-green-600 font-semibold mb-4">Courses</p>
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug max-w-[1090px] w-full px-4 m-auto">
          Provisions For Their Motivational Training And Consistent Exposure To
          Innovative Trends And Advanced Knowledge In Various Disciplines
        </h2>
        <CoursesCarousel />
      </section>
      <section className="py-24 text-center">
        <p className="text-2xl font-semibold text-green-600">Latest News</p>
        <div className="max-w-[1090px] w-full m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 my-10 px-4">
          <NewsCard
            title={"Public Notice Regarding HRDC"}
            date={new Date()}
            tag="Notice"
            link="#"
            image="/course_card_1.jpg"
          />
          <NewsCard
            title={"Public Notice Regarding HRDC"}
            date={new Date()}
            tag="Notice"
            link="#"
            image="/course_card_1.jpg"
          />
          <NewsCard
            title={"Public Notice Regarding HRDC"}
            date={new Date()}
            tag="Notice"
            link="#"
            image="/course_card_1.jpg"
          />
        </div>
        <div>
          <Link href={"#"}>
            <Button variant="custom" className="rounded-full gap-2">
              More News <ArrowRight className="size-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
