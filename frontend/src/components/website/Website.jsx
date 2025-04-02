import React from 'react';
import { Container, Grid, Typography, Box, Paper, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';

// Resume data object
const resumeData = {
    name: "Pranav Singhal",
    title: "Full Stack Software Developer",
    email: "singhalpranav22@gmail.com",
    phone: "+91-9999657247",
    linkedIn: "https://www.linkedin.com/in/pranav-singhal-4509841a7/",
    website: "https://heypranav.com",
    education: [
        {
            institution: "Indian Institute of Information Technology Allahabad",
            degree: "Bachelor of Technology in Information Technology",
            period: "July 2019 - May 2023",
            details: "CGPA: 9.01 | Leadership Role: Coordinator, Free and Open Source Software Wing"
        }
    ],
    workExperience: [
        {
            title: "Software Developer 2",
            company: "Schrodinger (D.E. Shaw)",
            location: "Hyderabad, India",
            period: "July 2024 - Present",
            details: [
                "Led frontend for 2 data-intensive projects, building scalable UI to speed up onboarding and development.",
                "Implemented Django REST APIs with notifications for seamless frontend integration.",
                "Set up CI/CD with Helm on GKE, enabling ephemeral PR testing with Playwright, cutting prod bugs by 45%.",
                "Optimized DBT pipelines with modular SQL and Airflow, boosting efficiency and reducing debugging by 30%.",
                "Implemented Kafka workflows for SAGA pattern, ensuring reliable distributed transactions across microservices.",
                "Collaborated with product teams to define requirements, refine UI/UX, and build a MVP.",
                "Mentored junior developers to streamline onboarding and enhance code quality."
            ],
            technologies: "React, Django, DBT, PostgreSQL, GithubActions, Kubernetes, Docker, Playwright, Kafka"
        },
        {
            title: "Software Developer 1",
            company: "Schrodinger (D.E. Shaw)",
            location: "Hyderabad, India",
            period: "September 2023 - June 2024",
            details: [
                "Initiated frontend for a data-driven app, establishing a robust React architecture and best practices.",
                "Adopted Vite for fast builds and React Query for efficient network state management.",
                "Built scalable forms using React Hook Form and reusable MUI components for consistency."
            ],
            technologies: "React, Redux, MUI, React Query, React Hook Form"
        },
        {
            title: "Product Engineer Intern",
            company: "Sprinklr",
            location: "Gurugram, India",
            period: "May - July 2022, January - September 2023",
            details: [
                "Worked on cross-platform mobile apps with React Native in a fast-paced, customer-facing environment.",
                "Developed a configurable SDK for Sprinklr’s live chat tailored for enterprise clients.",
                "Integrated MQTT for instant message delivery.",
                "Enhanced the live chat SDK with audio/video calling by integrating Zoom Video SDK.",
                "Built scalable UI components and native modules in Java and Swift."
            ],
            technologies: "React Native, Android, iOS, MQTT"
        }
    ],
    projects: [
        {
            title: "Sembreaker Mobile App",
            details: "Developed a cross-platform study resource app with 2000+ active users. Enabled seamless course-wise material access for IIIT-Allahabad students and set plans for expansion.",
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.geekhaven.sembreaker",
                github: "https://github.com/singhalpranav22/Student-Resource-App"
            }
        }
    ],
    achievements: [
        "Winner (Google Cloud) MLH Hackathon for developing HealthBloom App.",
        "Ranked 352 out of 12k+ participants in Google Kickstart Round-G 2022.",
        "Ranked 939 out of 10k+ teams in Google Hashcode qualification round 2022 with Team: menewbie.",
        "Awarded Governor’s Platinum Interactor Award for leadership in Rotary District-3012."
    ],
    skills: [
        "Javascript, Typescript, Python, Java, C/C++, Dart, HTML5, CSS, XHTML",
        "React, React Native, Django, Flutter, Android",
        "PostgreSQL, MongoDB, Redis, SQLite",
        "Kubernetes, Docker, Github Actions, Helm, GCP",
        "Kafka, Git, Bash, Playwright, VS Code, IntelliJ, Webpack, Vite, Linux",
        "Data Structures, OOP, DBMS, OS, Computer Networks, ML, AI, Graph Theory, Software Engineering",
        "Full Stack Development, Algorithm Design, Mobile Development, Large Language Models"
    ]
};

// Framer Motion variants for section animations and card hover effects
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const hoverVariants = {
    hover: { scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }
};

const Website = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem', backgroundColor: '#f7f9fc' }}>
            {/* Header */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ fontWeight: 'bold', color: '#0d47a1', textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
                    >
                        {resumeData.name}
                    </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontStyle: 'italic', color: '#1976d2', mb: 2 }}
                    >
                        {resumeData.title}
                    </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Link
                                href={`mailto:${resumeData.email}`}
                                underline="none"
                                sx={{ display: 'flex', alignItems: 'center', color: '#1565c0', fontWeight: 'bold' }}
                            >
                                <EmailIcon sx={{ mr: 0.5 }} /> Email
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href={resumeData.linkedIn}
                                underline="none"
                                sx={{ display: 'flex', alignItems: 'center', color: '#1565c0', fontWeight: 'bold' }}
                                target="_blank"
                            >
                                <LinkedInIcon sx={{ mr: 0.5 }} /> LinkedIn
                            </Link>
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center', color: '#1565c0', fontWeight: 'bold' }}
                            >
                                <PhoneIphoneIcon sx={{ mr: 0.5 }} /> {resumeData.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <SchoolIcon sx={{ fontSize: 28, color: '#0d47a1', mr: 1 }} />
                            <Typography variant="h4" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
                                Education
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#0d47a1', mb: 2 }} />
                        {resumeData.education.map((edu, idx) => (
                            <motion.div key={idx} variants={hoverVariants} whileHover="hover">
                                <Paper elevation={4} sx={{ p: 3, mb: 2, borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {edu.institution}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#424242' }}>
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {edu.period} | {edu.details}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <WorkIcon sx={{ fontSize: 28, color: '#0d47a1', mr: 1 }} />
                            <Typography variant="h4" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
                                Work Experience
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#0d47a1', mb: 2 }} />
                        {resumeData.workExperience.map((job, index) => (
                            <motion.div key={index} variants={hoverVariants} whileHover="hover">
                                <Paper elevation={4} sx={{ p: 3, mb: 2, borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {job.title} - {job.company}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: '#616161' }}>
                                        {job.location} | {job.period}
                                    </Typography>
                                    <Box sx={{ mt: 1 }}>
                                        {job.details.map((item, idx) => (
                                            <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                                                • {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold', color: '#0d47a1' }}>
                                        Technologies: {job.technologies}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <BuildIcon sx={{ fontSize: 28, color: '#0d47a1', mr: 1 }} />
                            <Typography variant="h4" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
                                Projects
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#0d47a1', mb: 2 }} />
                        {resumeData.projects.map((project, idx) => (
                            <motion.div key={idx} variants={hoverVariants} whileHover="hover">
                                <Paper elevation={4} sx={{ p: 3, mb: 2, borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {project.details}
                                    </Typography>
                                    <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                                        {project.links.playStore && (
                                            <Link href={project.links.playStore} underline="none" sx={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1565c0' }}>
                                                Play Store
                                            </Link>
                                        )}
                                        {project.links.github && (
                                            <Link href={project.links.github} underline="none" sx={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1565c0' }}>
                                                GitHub
                                            </Link>
                                        )}
                                    </Box>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <EmojiEventsIcon sx={{ fontSize: 28, color: '#0d47a1', mr: 1 }} />
                            <Typography variant="h4" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
                                Achievements
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#0d47a1', mb: 2 }} />
                        <motion.div variants={hoverVariants} whileHover="hover">
                            <Paper elevation={4} sx={{ p: 3, mb: 2, borderRadius: 2 }}>
                                {resumeData.achievements.map((achieve, idx) => (
                                    <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                                        • {achieve}
                                    </Typography>
                                ))}
                            </Paper>
                        </motion.div>
                    </Box>
                </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4, mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <CodeIcon sx={{ fontSize: 28, color: '#0d47a1', mr: 1 }} />
                            <Typography variant="h4" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>
                                Skills
                            </Typography>
                        </Box>
                        <Divider sx={{ borderColor: '#0d47a1', mb: 2 }} />
                        <motion.div variants={hoverVariants} whileHover="hover">
                            <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
                                {resumeData.skills.map((skill, idx) => (
                                    <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                                        • {skill}
                                    </Typography>
                                ))}
                            </Paper>
                        </motion.div>
                    </Box>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default Website;
