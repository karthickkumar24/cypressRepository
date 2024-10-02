// <reference types ="cypress" />

describe('coaching-member APIs', ()=>{
    it('getMemberAccountSummaryInternal', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://coaching-member-web.int.werally.in/internal/member/v1/u/bfb6770f-fe22-4dcb-aebf-16eb31631125',   
            headers : {
                'accept' : "application/json"
            },
            qs: { programId : 'real_appeal'}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.programTrackStatuses[0].id).to.eq(programTrackStatusId);
        }).then((response)=>{
            const programTrackStatusId = response.body.programTrackStatuses.id
            cy.log("programTrackStatusId is: "+ programTrackStatusId)
            cy.request({
               method : 'GET',
               url : 'https://coaching-member-web.int.werally.in/internal/member/v1/programTrackStatuses/' + programTrackStatusId,
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', programTrackStatusId);
            })
        })

    })
    
})  




