import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  return (
    <div>
      <h2>Team</h2>
      <TeamMemberCard name="Lithish" jobTille="Software Developer" />
      <TeamMemberCard name="Vignesh" jobTille="Manager" />
    </div>
  )
}

export default App
