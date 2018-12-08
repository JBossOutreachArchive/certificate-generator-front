export class Certificate {
    id: string;
    issued_for: string;
    student: {
      id: number;
      name: string;
    }
    issuing_organization: {
      name: string
    }
    date: string;
}
