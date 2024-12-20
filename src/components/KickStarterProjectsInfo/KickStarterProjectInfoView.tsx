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
        <h1 className="title">KickStarter Projects</h1>
        
        <div className="table-container">
            <table className="projects-table">
                <thead>
                    <tr>
                        <th className="column-header">S.No.</th>
                        <th className="column-header">Title</th>
                        <th className="column-header">Funding</th>
                        <th className="column-header">Pledged</th>
                    </tr>
                </thead>
                <tbody>
                    {projects?.map((project) => (
                        <tr key={project.sNo}>
                            <td className="serial-number">
                                <div className="mobile-flex">
                                    <span className="mobile-label">S.No:</span>
                                    {project.sNo}
                                </div>
                            </td>
                            <td className="project-title">
                                <div className="mobile-flex">
                                    <span className="mobile-label">Title:</span>
                                    {project.title}
                                </div>
                            </td>
                            <td>
                                <div className="mobile-flex">
                                    <span className="mobile-label">Funding:</span>
                                    <div className="funding-progress">
                                        <div 
                                            className="progress-bar" 
                                            style={{ width: `${Math.min(project.percentageFunded, 100)}%` }}
                                        />
                                        <span className={project.percentageFunded < 55 ? 'percentage-text-dark' : 'percentage-text-light'}>
                                            {project.percentageFunded}%
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td className="amount">
                                <div className="mobile-flex">
                                    <span className="mobile-label">Pledged:</span>
                                    {project.amtPledged} {project.currency}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="pagination-controls">
            <button 
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ← Previous
            </button>
            
            <span className="page-info">Page {currentPage} of {totalPages}</span>
            
            <button 
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next →
            </button>
        </div>
    </div>
  )
}

export default KickStarterProjectInfoView