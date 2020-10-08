import { JobCategory } from './JobCategory';
import { JobType } from './JobType';


export interface Vacancy {
    id: number;
    title: string;
    description: string;
    location: string;
    employee: string;
    jobCategory: JobCategory;
    jobType: JobType;
    createdAt: Date;
}

export default Vacancy;

