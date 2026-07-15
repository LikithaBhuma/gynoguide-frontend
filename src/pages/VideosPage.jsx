import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import VideoCard from '../components/VideoCard'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import { videos } from '../data/videos'

const categories = ['All', ...new Set(videos.map((video) => video.category))]

const VideosPage = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase()) || video.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || video.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <>
      <SEO title="GynoGuide AI | Videos" description="Watch curated educational YouTube videos on women’s health topics." keywords="videos, women health, learning" />
      <section className="py-5 section-blush">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="page-title section-heading font-display">YouTube Learning Center</h2>
          <p className="page-subtitle">Explore curated educational videos across women&apos;s health and wellness topics.</p>
        </div>
        <div className="row g-3 align-items-center mb-4">
          <div className="col-lg-8">
            <SearchBar value={search} onChange={setSearch} placeholder="Search videos..." />
          </div>
          <div className="col-lg-4">
            <Filters options={categories} active={activeCategory} onChange={setActiveCategory} />
          </div>
        </div>
        <div className="row g-4">
          {filteredVideos.map((video) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="col-md-6 col-lg-4">
              <VideoCard video={video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default VideosPage
