# AWS 3-Tier Highly Available Book Store Application

## Architecture Overview

This project implements a highly available and scalable 3-tier web application on AWS using React, Node.js, MySQL RDS, Auto Scaling Groups, Load Balancers, CloudFront, and Route 53.

### Architecture Flow

```text
User
  │
  ▼
kttlikhith.xyz
  │
  ▼
GoDaddy (Domain Registration)
  │
  ▼
Amazon Route 53
  │
  ▼
Amazon CloudFront
  │
  ▼
Internet Gateway
  │
  ▼
Public Application Load Balancer
  │
  ▼
Web Tier Auto Scaling Group
(React + Nginx)
  │
  ▼
Internal Application Load Balancer
  │
  ▼
Application Tier Auto Scaling Group
(Node.js + Express)
  │
  ▼
Amazon RDS MySQL
```

---

## Infrastructure Components

### DNS Layer

* Domain registered in GoDaddy
* DNS management through Amazon Route 53
* Domain mapped to CloudFront distribution

### CDN Layer

* Amazon CloudFront used for content delivery
* Reduces latency and improves application performance
* Acts as entry point for internet traffic

### Networking Layer

* Custom VPC spanning two Availability Zones
* Internet Gateway attached to VPC
* Route Tables configured for public and private subnet routing
* NAT Gateways deployed in each Availability Zone

### Public Layer

* Public Application Load Balancer deployed across multiple Availability Zones
* Distributes traffic to Web Tier instances

### Web Tier

* React application hosted using Nginx
* Deployed on EC2 instances
* Managed by Auto Scaling Group
* Hosted in private subnets

### Application Tier

* Node.js Express REST API
* Hosted on EC2 instances
* Managed by Auto Scaling Group
* Accessible only through Internal Application Load Balancer

### Database Tier

* Amazon RDS MySQL
* Hosted in private subnets
* Accessible only from Application Tier

---

## High Availability Features

* Multi-AZ deployment
* Auto Scaling Groups for Web Tier
* Auto Scaling Groups for Application Tier
* Public Load Balancer across multiple Availability Zones
* Internal Load Balancer across multiple Availability Zones
* RDS Multi-AZ ready architecture
* CloudFront global content delivery

---

## Security Architecture

### Web Tier

* Accessible only through Public ALB

### Application Tier

* Accessible only through Internal ALB

### Database Tier

* Accessible only from Application Tier Security Group

### Security Groups

* Principle of least privilege followed
* Layer-to-layer communication restricted using Security Groups

---

## Technology Stack

### Frontend

* React
* Nginx

### Backend

* Node.js
* Express.js

### Database

* Amazon RDS MySQL

### AWS Services

* VPC
* Route 53
* CloudFront
* EC2
* Auto Scaling Group
* Application Load Balancer
* RDS
* NAT Gateway
* Internet Gateway
* Security Groups

---

## Application Features

* View books
* Add books
* REST API integration
* Highly available deployment
* Scalable architecture
* Secure private backend communication
