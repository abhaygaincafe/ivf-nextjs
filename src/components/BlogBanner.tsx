"use client"


import React from 'react'
import {motion} from "framer-motion"

const BlogBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-ivf-dark-grey mb-6">
                Our <span className="text-ivf-orange">Blog</span>
            </h1>
            <p className="text-ivf-grey text-lg max-w-2xl mx-auto">
                Stay informed with the latest insights, tips, and stories about fertility treatment and reproductive health.
            </p>
        </motion.div>
    )
}

export default BlogBanner
