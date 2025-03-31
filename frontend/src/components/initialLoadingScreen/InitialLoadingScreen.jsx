import React from 'react';
import { Box, Typography } from '@mui/material';
import * as motion from "motion/react-client"

const InitialLoadingScreen = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <motion.img
                src="src/assets/cat_and_pranav.jpeg" // replace with your cat image path
                alt="Cute cat"
                animate={{
                    x: [0, 50, 0],   // horizontal movement
                    y: [0, -30, 0]   // slight vertical bounce
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: 200, height: 250 }}
            />
            <Typography variant="h6" sx={{ mt: 2, p: 2 }}>
                Hey there, until my website is building, do you find my pussy cute?
            </Typography>
        </Box>
    );
};

export default InitialLoadingScreen;
