import Search from "../../assets/img/search.svg"
import Bell from "../../assets/img/bell.svg"
import Jones from "../../assets/img/Jones.svg"
import Plus from "../../assets/img/plus.svg"

import { HeroCard } from "../HeroCard/HeroCard"
import { IntroResult } from "../IntroResult/IntroResult"
import {Details} from "../Details/Details"
import { All } from "../All/All"

import "./content.css"

export function Content() {
	return(
		<div className="content">
			<header className="header">
				<h1>Overview</h1>
				<div className="header-icons">
					<img src={Search} alt="Search" width={16} height= {16} />
					<img className="Bell" src={Bell} alt="Bell" width={16} height= {16} />
					<div className="header-info">
						<h2>Jones Ferdinand</h2>
						<img src={Jones} alt="Jones" width={40} height = {40} />
					</div>
				</div>
			</header>
			<main>
				<section className="hero">
					<ul className="hero-list">
						<HeroCard text={"Unresolved"} number={60} />
						<HeroCard text={"Overdue"} number={16} />
						<HeroCard text={"Open"} number={43} />
						<HeroCard text={"On hold"} number={64} />
					</ul>
				</section>
				<section className="intro">
					<div className="intro-time">
						<div className="intro-time-left">
							<h2 className="intro-time-left-title">Today’s trends</h2>
							<p className="intro-time-left-text">as of 25 May 2019, 09:41 PM</p>
						</div>
						<ul className="intro-time-right">
							<li className="intro-time-right-item">
								<span className="intro-time-span-first"></span>
								<p className="intro-time-text">Today</p>
							</li>
							<li className="intro-time-right-item">
							<span className="intro-time-span-second"></span>
								<p className="intro-time-text">Yesterday</p>
							</li>
						</ul>
					</div>
					<ul className="intro-result">
						<IntroResult texts={"Resolved"} numbers={449} />
						<IntroResult texts={"Received"} numbers={426} />
						<IntroResult texts={"Average first response time"} numbers={"33m"} />
						<IntroResult texts={"Average response time"} numbers={"3h 8m"} />
						<IntroResult texts={"Resolution within SLA"} numbers={"94%"} />
					</ul>
				</section>
				<section className="box">
					<div className="details">
						<div className="box-inner">
							<div className="details-info">
								<h2 className="details-info-title">Unresolved tickets</h2>
								<p className="details-info-text">Group: <span className="details-span">Support</span></p>
							</div>
							<a href="#" className="details-link">View details</a>
						</div>
						<ul className="details-list">
							<Details dText={"Waiting on Feature Request"} dNum={"4238"} />
							<Details dText={"Awaiting Customer Response"} dNum={"1005"} />
							<Details dText={"Awaiting Developer Fix"} dNum={"914"} />
							<Details dText={"Pending"} dNum={"281"} />
						</ul>
					</div>
					<div className="all">
						<div className="all-inner">
							<div className="all-info">
								<h2 className="all-info-title">Tasks</h2>
								<p className="all-info-text">Today</p>
							</div>
							<a href="#" className="all-info-link">View all</a>
						</div>
						<div className="all-task">
							<p className="all-task-text">Create new task</p>
							<img src={Plus} alt="plus" className="plus" />
						</div>
						<ul className="all-list">
							<All title={"Finish ticket update"} button={"Urgent"} clas={"urgent"} />
							<All title={"Create new ticket example"} button={"New"} clas={"new"} />
							<All title={"Update ticket report"} button={"Default"} clas={"default"} />
						</ul>
					</div>
				</section>
			</main>
		</div>
	)
}