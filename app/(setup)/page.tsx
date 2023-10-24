import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";

const SetupPage = async () => {
    const profile = await initialProfile();
    
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })
    
    return <div>Create a Server</div>;
}
 
export default SetupPage;

