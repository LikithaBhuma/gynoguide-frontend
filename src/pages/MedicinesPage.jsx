import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import MedicineCard from '../components/MedicineCard'
import SearchBar from '../components/SearchBar'
import { medicines } from '../data/medicines'

const MedicinesPage = () => {
  const [search, setSearch] = useState('')

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => medicine.name.toLowerCase().includes(search.toLowerCase()) || medicine.usedFor.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <>
      <SEO title="GynoGuide AI | Medicines" description="Learn about common medicines related to women’s health in an educational setting." keywords="medicines, women health, education" />
      <section className="py-5 section-blush">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="page-title section-heading font-display">Medicine Information</h2>
          <p className="page-subtitle">Educational summaries for common medicines used in women&apos;s health learning.</p>
        </div>
        <div className="mb-4">
          <SearchBar value={search} onChange={setSearch} placeholder="Search medicines..." />
        </div>
        <div className="row g-4">
          {filteredMedicines.map((medicine) => (
            <motion.div key={medicine.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="col-md-6 col-lg-3">
              <MedicineCard medicine={medicine} />
            </motion.div>
          ))}
        </div>
        <div className="alert alert-warning mt-4" role="alert">
          This information is for educational purposes only and should not replace professional medical advice.
        </div>
      </div>
    </section>
    </>
  )
}

export default MedicinesPage
