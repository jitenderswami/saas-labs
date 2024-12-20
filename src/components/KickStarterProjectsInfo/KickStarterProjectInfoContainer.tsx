import { useState } from 'react';
import KickStarterProjectInfoView from './KickStarterProjectInfoView'
import { useKickstarterProjects } from './hooks/useKickStarterProjects'

const KickStarterProjectInfoContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, error, isEmpty } = useKickstarterProjects(currentPage);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    if (isEmpty) return <div>No projects found</div>;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return <KickStarterProjectInfoView 
        projects={data?.projects}
        currentPage={data?.currentPage}
        totalPages={data?.totalPages}
        onPageChange={handlePageChange}
    />;  
}

export default KickStarterProjectInfoContainer