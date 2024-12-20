import { KickStarterProject } from "../types/KickStarterProject"

export const parseProject = (project: any): KickStarterProject => {
    return {
        sNo: project['s.no'],
        amtPledged: project['amt.pledged'],
        blurb: project['blurb'],
        by: project['by'],
        country: project['country'],
        currency: project['currency'],
        endTime: new Date(project['end.time']),
        location: project['location'],
        percentageFunded: project['percentage.funded'],
        numBackers: project['num.backers'],
        state: project['state'],
        title: project['title'],
        type: project['type'],
        url: project['url']
    }
}
