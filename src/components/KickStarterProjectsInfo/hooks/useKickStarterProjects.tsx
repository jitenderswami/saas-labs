import { useQuery } from '@tanstack/react-query';
import { KickStarterProject } from '../types/KickStarterProject';
import { parseProject } from '../parser/projectParser';

const PROJECTS_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
const ITEMS_PER_PAGE = 5; // Number of items to show per page

interface PaginatedResponse {
    projects: KickStarterProject[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}

const fetchProjects = async (): Promise<KickStarterProject[]> => {
    const response = await fetch(PROJECTS_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map((project: any) => parseProject(project));
};

export const useKickstarterProjects = (page: number = 1) => {
    const { data: allProjects, isLoading, error } = useQuery({
        queryKey: ['kickstarter-projects'],
        queryFn: fetchProjects,
        staleTime: 5 * 60 * 1000,
    });

    // Calculate pagination details
    const paginatedData: PaginatedResponse | undefined = allProjects ? {
        projects: allProjects.slice(
            (page - 1) * ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE
        ),
        totalPages: Math.ceil(allProjects.length / ITEMS_PER_PAGE),
        currentPage: page,
        totalItems: allProjects.length,
    } : undefined;

    return {
        data: paginatedData,
        isLoading,
        error,
        isEmpty: allProjects?.length === 0,
    };
};