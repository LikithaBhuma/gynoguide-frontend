import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import DiseaseCard from '../components/DiseaseCard'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import { diseases } from '../data/diseases'

const categories = ['All', ...new Set(diseases.map((disease) => disease.category))]

const DiseasesPage = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredDiseases = useMemo(() => {
    return diseases.filter((disease) => {
      const matchesSearch = disease.name.toLowerCase().includes(search.toLowerCase()) || disease.overview.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || disease.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <>
      <SEO title="GynoGuide AI | Diseases" description="Explore educational disease information for common women’s health conditions." keywords="diseases, women health, gynecology" />
      <section className="py-5 section-blush">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="page-title section-heading font-display">Disease Encyclopedia</h2>
          <p className="page-subtitle">Search and explore educational disease information with clear sections for symptoms, causes, treatment, and prevention.</p>
        </div>
        <div className="row g-3 align-items-center mb-4">
          <div className="col-lg-8">
            <SearchBar value={search} onChange={setSearch} placeholder="Search diseases..." />
          </div>
          <div className="col-lg-4">
            <Filters options={categories} active={activeCategory} onChange={setActiveCategory} />
          </div>
        </div>
        <div className="row g-4">
          {filteredDiseases.map((disease) => (
            <motion.div key={disease.slug} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="col-md-6 col-lg-4">
              <DiseaseCard disease={disease} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default DiseasesPage
