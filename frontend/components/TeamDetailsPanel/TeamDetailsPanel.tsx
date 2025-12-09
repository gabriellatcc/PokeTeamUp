import React from 'react';

const TeamDetailsPanel = () => {
    return (
        <div className="w-full h-[75vh] bg-[#151515]/95 border-[4px] border-[#133a78] rounded-xl flex items-center justify-center p-6 relative shadow-2xl">
            <div className="text-center text-gray-300">
                <p className="text-lg">
                    Select a team member to check<br />
                    Its information!
                </p>
            </div>
        </div>
    );
};

export default TeamDetailsPanel;