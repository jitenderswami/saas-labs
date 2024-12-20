import React from 'react'
import { KickStarterProject } from './types/KickStarterProject';
import './styles/styles.css'

interface KickStarterProjectInfoViewProps { 
    projects: KickStarterProject[] | undefined;
    currentPage: number | undefined;
    totalPages: number | undefined;
    onPageChange: (page: number) => void;
}

const KickStarterProjectInfoView:React.FC<KickStarterProjectInfoViewProps> = ({ projects, currentPage = 1, totalPages = 1, onPageChange }) => {
  return (
    <div className='kickstarter-project-info-view'>
        <h1>KickStarter Projects</h1>
        
        {/* Projects Table */}
        <div className="table-container">
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Percentage Funded</th>
                        <th>Amount Pledged</th>
                    </tr>
                </thead>
                <tbody>
                    {projects?.map((project) => (
                        <tr key={project.sNo}>
                            
                            <td>{project.sNo}</td>
                            <td>{project.title}</td>
                            <td>{project.percentageFunded}%</td>
                            <td>{project.amtPledged} {project.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            
            <span>Page {currentPage} of {totalPages}</span>
            
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default KickStarterProjectInfoView