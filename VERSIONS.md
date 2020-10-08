0.1.1 - Sep 25 2020
- First code commit
- Created app skeleton
- Added the following modules:
    v1//member
        member-list
        member-edit
        member-import
    /shared
        field-text
        field-select
        field-file
        field-checkbox

0.1.2 - Sep 26 2020
- Added the following modules:
    v1/member
        member-contribs
        member-edit-beneficiaries
        member-edit-form
        member-loans
        member-new

0.1.2 - Sep 27 2020
- Added/fixed the following modules:
    layout/v1
        member
            member-contribs
            member-loans
            member-import
        setup
            company-settings
            departments (offices)
            locations
        transaction
            loan
                loan-approve
                loan-edit-form
            transaction-task
                generate-billing-statement
                import-remittance
    shared
        form
            field-checkbox
            field-select
        navbar
    styles
        forms.css
        pages.css
        tables.css

0.1.3 - Sep 29 2020
- Converted the following control to reactive: field-text
    Implemented partly for member-edit-form

0.1.4 - Sep 30 2020
- Implemented reactive child components
    field-text
    field-select
    field-checkbox
    field-text-view
- Discarded reactive child components for now (can't seem to make them work...) :(

0.1.5 - Oct 1 2020
- Implemented the following Member API calls:
    list
    create
    update (not yet finished)

0.2.1 - Oct 8 2020
- Started implementing v2 layout