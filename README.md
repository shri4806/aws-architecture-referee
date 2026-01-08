# AWS Architecture Referee for Student Hackathons & Mini Projects

## What this project is about
When students participate in hackathons or build mini projects, choosing the right AWS architecture often becomes confusing. 
Most beginners either copy random tutorials or over-engineer their solution without understanding the trade-offs involved.

This project is a simple decision-support tool that helps students compare different AWS architecture options and understand
when each option makes sense — instead of giving a single “best” answer.

## Why this problem matters
In hackathons and academic projects, time, skill level, and project scope are limited. 
Generic cloud recommendations usually ignore these constraints, which leads to poor architectural choices.

This tool focuses on explaining *why* an option works or fails under specific conditions.

## What the tool does
The Architecture Referee compares three common AWS approaches:
- Static website using Amazon S3
- EC2-based monolithic application
- Serverless architecture using AWS Lambda

For each option, the tool explains:
- When it is suitable
- When it should be avoided
- Key trade-offs in complexity, scalability, and cost
- Common mistakes made by students

## Technologies used
- HTML
- CSS
- JavaScript
- Basic AWS architecture concepts
- Kiro (AI assistant) for accelerating comparison and reasoning

## How Kiro was used
Kiro was used to explore and compare AWS architecture options from a beginner’s perspective. 
It helped identify important trade-offs and common mistakes, which were then converted into simple, rule-based logic
inside the tool.

Screenshots showing Kiro’s role are included in the `.kiro` folder.

## Current status
The core referee logic and comparison interface are implemented as part of the Week 6 “The Referee” challenge.
