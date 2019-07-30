//
//  TestData.h
//  memory_issue_repro
//
//  Created by Jiwan Bhandari on 7/29/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef TestData_h
#define TestData_h

#import <React/RCTBridgeModule.h>


@interface TestData : NSObject <RCTBridgeModule> {}
-(void) getData: success:(RCTResponseSenderBlock)success error:(RCTResponseSenderBlock)error;
@end


#endif /* TestData_h */
